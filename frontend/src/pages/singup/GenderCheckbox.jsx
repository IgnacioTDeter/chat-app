import { useState } from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <article className="w-2/3 flex mt-6">
            <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text text-white'>Male</span>
					<input
						type='checkbox'
						className="checkbox checkbox-warning" 
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
            </div>

            <div className="form-control">
            <label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text text-white'>Female</span>
					<input
						type='checkbox'
						className="checkbox checkbox-warning" 
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
            </div>
        </article>
    );
};

export default GenderCheckbox;


/*
const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text'>Male</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text'>Female</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;

*/