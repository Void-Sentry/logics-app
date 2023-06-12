import { Endpoint, Method } from 'constants/api';
import { memo, useCallback, useEffect, useState } from 'react';
import { http } from 'utils/http';

interface SelectProps {
    endpoint: Endpoint;
    title: string;
}

export const Select = memo<SelectProps>(({ endpoint, title }) => {
    const [getData, setData] = useState([]);
    const data = useCallback(async () => {
        setData(await http(endpoint, { method: Method.GET }));
    }, []);

    useEffect(() => {
        data();
    }, []);
    return (
        <div>
            <label htmlFor="select">{title}</label>
            <select id="select">
                {getData.map((item, index) => (
                    <option key={index} value={item?.descricao}>{item?.descricao}</option>
                ))}
            </select>
        </div>
    );
});