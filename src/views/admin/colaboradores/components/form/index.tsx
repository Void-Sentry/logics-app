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
                        <div className="col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-400 dark:text-white leading-6 rounded-full">
                                Nome
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full dark:bg-navy-900 rounded-full border-0 py-1.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(event) => setForm({ ...getForm, name: event.target.value})}
                                    value={getForm.name}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-400 dark:text-white leading-6">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-full border-0 dark:bg-navy-900 dark:text-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(event) => setForm({ ...getForm, email: event.target.value})}
                                    value={getForm.email}
                                />
                            </div>
                        </div>

                        {!isUpdate && <div className="col-span-3">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-400 dark:text-white">
                                Senha
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-full border-0 dark:bg-navy-900 dark:text-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(event) => setForm({ ...getForm, password: event.target.value})}
                                    value={getForm.password}
                                />
                            </div>
                        </div>}

                        <div className={!isUpdate ? "col-span-3" : "col-span-full"}>
                            <label htmlFor="country" className="block leading-6 text-sm font-semibold text-gray-400 dark:text-white">
                                Classificação
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    onChange={(event) => setForm({ ...getForm, tipo_usuario_id: event.target.value })}
                                    className="block w-full rounded-full dark:text-white border-0 py-1.5 text-gray-900 shadow-sm ring-1 dark:bg-navy-900 ing-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={1}>admin</option>
                                    <option value={2}>colab</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
});

export default ActionForm;
