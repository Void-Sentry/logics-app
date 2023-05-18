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
                                Descrição
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full dark:bg-navy-900 rounded-full border-0 py-1.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(event) => setForm({ ...getForm, descricao: event.target.value})}
                                    value={getForm.descricao}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-400 dark:text-white leading-6">
                                Carga
                            </label>
                            <div className="mt-2">
                                <input
                                    id="carga"
                                    name="carga"
                                    type="text"
                                    autoComplete="carga"
                                    className="block w-full rounded-full border-0 dark:bg-navy-900 dark:text-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(event) => setForm({ ...getForm, carga_id: event.target.value})}
                                    value={getForm.carga_id}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-400 dark:text-white leading-6">
                                Veículo
                            </label>
                            <div className="mt-2">
                                <input
                                    id="veículo"
                                    name="veículo"
                                    type="text"
                                    autoComplete="descricao"
                                    className="block w-full rounded-full border-0 dark:bg-navy-900 dark:text-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(event) => setForm({ ...getForm, veiculo_id: event.target.value})}
                                    value={getForm.veiculo_id}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
});

export default ActionForm;
