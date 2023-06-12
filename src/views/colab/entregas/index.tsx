import { Endpoint, Method } from 'constants/api';
import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GET_VEHICLES_REQUEST } from 'store/actions';
import { rootState } from 'store/types/store/state/root';
import { ComplexTable } from 'components/table/ComplexTable';
import { initialState } from 'store/reducers/admin/vehicle';

export const Deliveries = memo(() => {
  const { items } = useSelector((state: rootState) => state.vehicle);
  const { user} = useSelector((state: rootState) => state.auth.item);
  const [isTableAtt, setTableAtt] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_VEHICLES_REQUEST({
      url: `${Endpoint.FETCH_VEHICLE}/${user.id}`,
      options: {
        method: Method.GET,
        body: new URLSearchParams(Object.entries(user)),
      }
    }));
  }, [dispatch, isTableAtt]);

  return (
    <ComplexTable
      endpoint={Endpoint.FETCH_VEHICLE}
      isAtt={isTableAtt}
      init={initialState.items[0]}
      setAtt={setTableAtt}
      tableData={items}
    />
  );
});
