import { Select } from "components/select";
import { BASE_URL, Endpoint, Method } from "constants/api";
import { Dispatch, memo, SetStateAction, useCallback, useEffect, useState } from "react";
import { http } from "utils/http";

interface ActionFormProps {
    setForm: Dispatch<SetStateAction<any>>;
    getForm: Record<string, any>;
}

const splitWord = (key: string) => {
    const partes = key.split("_");
    return partes[0];   
};

const ActionForm = memo<ActionFormProps>(({ setForm, getForm }) => {
    const [getData, setData] = useState<Array<Record<string, any>>>([]);
    const fetchSelect = useCallback(async () => {
        setData(await http(Endpoint.FETCH_ROLE, { method: Method.GET }));
    }, [Endpoint, Method]);

    useEffect(() => {
        fetchSelect();
    }, [fetchSelect]);

    return (
        <form>
            <div>
                <div className="border-b border-gray-900/10 w-full">
                    <div className="grid grid-cols-1 gap-x-12 gap-y-8">
                        <div key="name">
                            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-400 dark:text-white leading-6 rounded-full">
                                Nome
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="name"
                                    className="block w-full dark:bg-navy-900 rounded-full border-0 py-1.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(event) => setForm({ ...getForm, ['name']: event.target.value})}
                                    value={getForm['name']}
                                />
                            </div>
                            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-400 dark:text-white leading-6 rounded-full">
                                E-mail
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="email"
                                    className="block w-full dark:bg-navy-900 rounded-full border-0 py-1.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(event) => setForm({ ...getForm, ['email']: event.target.value})}
                                    value={getForm['email']}
                                />
                            </div>
                            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-400 dark:text-white leading-6 rounded-full">
                                Cargo
                            </label>
                            <div className="mt-2">
                                <select className="block w-full dark:bg-navy-900 rounded-full border-0 py-1.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    {getData.map((item, index) => (
                                        <option
                                            key={index}
                                            onClick={() => setForm({ ...getForm, ['tipo_usuario_id']: item.id})}
                                            value={item.id}
                                        >
                                            {item.descricao}
                                        </option>
                                    ))}
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
