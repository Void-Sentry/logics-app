import { Dispatch, memo, SetStateAction } from "react";

interface ActionFormProps {
    setForm: Dispatch<SetStateAction<any>>;
    getForm: Record<string, any>;
    isUpdate: boolean;
}

const ActionForm = memo<ActionFormProps>(({ setForm, getForm, isUpdate }) => {
    return (
        <form>
            <div>
                <div className="border-b border-gray-900/10">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {Object.keys(getForm).map((item, index) => (
                            <div className="col-span-3" key={index}>
                                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-400 dark:text-white leading-6 rounded-full">
                                    {item}
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id={item}
                                        className="block w-full dark:bg-navy-900 rounded-full border-0 py-1.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(event) => setForm({ ...getForm, [item]: event.target.value})}
                                        value={getForm[item]?.descricao || getForm[item] || ''}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </form>
    )
});

export default ActionForm;
