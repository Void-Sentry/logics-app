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
    const [getWord, setWord] = useState('');
    const [getData, setData] = useState<Array<Record<string, any>>>([]);

    useEffect(() => {
        const fetchSelect = async () => {
            const res = await http(`${getWord}/${getWord}`, { method: Method.GET });
            res.length > 0 ? setData(res) : setData([{ id: 0, descricao: 'empty', name: '' }]);
        };

        if (getWord !== '') fetchSelect();
    }, [getWord, getForm]); // Atualizado para incluir getForm como dependência

    return (
        <form>
            <div>
                <div className="border-b border-gray-900/10">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {Object.keys(getForm).map((item, index) => {
                            if (item.includes('_id') && getWord === '') { // Verifica se getWord está vazio antes de chamar setWord
                                setWord(splitWord(item));
                            }

                            return (
                                <div className="col-span-3" key={index}>
                                    {item.includes(getWord)
                                        ? (
                                            getData.length > 0 && (
                                                <>
                                                    <label htmlFor="first-name" className="block text-sm font-semibold text-gray-400 dark:text-white leading-6 rounded-full">
                                                        {getWord}
                                                    </label>
                                                    <div className="mt-2">
                                                        <select className="block w-full dark:bg-navy-900 rounded-full border-0 py-1.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                            {getData.map((option) => (
                                                                <option key={option.id} value={option?.descricao || option?.name}>
                                                                    {option?.descricao || option?.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </>
                                            )
                                        ) :   (
                                            <>
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
                                            </>
                                        )
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </form>
    )
});

export default ActionForm;
