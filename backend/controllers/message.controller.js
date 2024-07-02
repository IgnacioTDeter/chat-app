	import Conversation from "../models/conversation.model.js";
	import Message from "../models/message.model.js";
	import { getReceiverSocketId, io } from "../socket/socket.js";

	export const sendMessage = async (req, res) => {
		try {
			const { message } = req.body;
			const { id: receiverId } = req.params; // Obtiene el ID del receptor de los parámetros de la solicitud
			const senderId = req.user._id; // Obtiene el ID del remitente desde el usuario autenticado en la solicitud

			// Busca una conversación existente entre el remitente y el receptor
			let conversation = await Conversation.findOne({
				participants: { $all: [senderId, receiverId] },
			});

			// Si no existe la conversación, crea una nueva
			if (!conversation) {
				conversation = await Conversation.create({
					participants: [senderId, receiverId],
				});
			}

			// Crea un nuevo mensaje
			const newMessage = new Message({
				senderId,
				receiverId,
				message,
			});

			// Añade el ID del nuevo mensaje a la lista de mensajes de la conversación
			if (newMessage) {
				conversation.messages.push(newMessage._id);
			}

			// Guarda la conversación y el mensaje de manera simultánea usando Promise.all
			await Promise.all([conversation.save(), newMessage.save()]);

			// SOCKET IO FUNCTIONALITY WILL GO HERE
			const receiverSocketId = getReceiverSocketId(receiverId); // Obtiene el ID de socket del receptor
			if (receiverSocketId) {
				// Emite un evento "newMessage" al cliente específico usando su ID de socket
				io.to(receiverSocketId).emit("newMessage", newMessage);
			}

			// Devuelve el mensaje creado como respuesta
			res.status(201).json(newMessage);
		} catch (error) {
			console.log("Error in sendMessage controller: ", error.message);
			res.status(500).json({ error: "Internal server error" });
		}
	};

	export const getMessages = async (req, res) => {
		try {
			const { id: userToChatId } = req.params; // Obtiene el ID del usuario con el que se está chateando desde los parámetros de la solicitud
			const senderId = req.user._id; // Obtiene el ID del remitente desde el usuario autenticado en la solicitud


			// Busca la conversación entre el remitente y el usuario con el que se está chateando
			const conversation = await Conversation.findOne({
				participants: { $all: [senderId, userToChatId] },
			}).populate("messages"); // Popula los mensajes para obtener los documentos completos de los mensajes

			if (!conversation) return res.status(200).json([]);

			// Obtiene los mensajes de la conversación encontrada
			const messages = conversation.messages;

			res.status(200).json(messages);
		} catch (error) {
			console.log("Error in getMessages controller: ", error.message);
			res.status(500).json({ error: "Internal server error" });
		}
	};