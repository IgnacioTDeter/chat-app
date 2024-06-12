import { useState } from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    const [maleChecked, setMaleChecked] = useState(selectedGender === 'male');
    const [femaleChecked, setFemaleChecked] = useState(selectedGender === 'female');

    const handleMaleChange = () => {
        setMaleChecked(!maleChecked);
        setFemaleChecked(false);
        onCheckboxChange('male');
    };

    const handleFemaleChange = () => {
        setFemaleChecked(!femaleChecked);
        setMaleChecked(false);
        onCheckboxChange('female');
    };

    return (
        <article className="w-2/3 flex mt-6">
            <div className="form-control">
                <label className="cursor-pointer label ">
                    <span className="label-text mr-2 text-white">Male</span>
                    <input 
                        type="checkbox" 
                        checked={maleChecked} 
                        onChange={handleMaleChange} 
                        className="checkbox checkbox-warning" 
                    />
                </label>
            </div>

            <div className="form-control">
                <label className="cursor-pointer label ml-3">
                    <span className="label-text mr-2 text-white">Female</span>
                    <input 
                        type="checkbox" 
                        checked={femaleChecked} 
                        onChange={handleFemaleChange} 
                        className="checkbox checkbox-warning" 
                    />
                </label>
            </div>
        </article>
    );
};

export default GenderCheckbox;
