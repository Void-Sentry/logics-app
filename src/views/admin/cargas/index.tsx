import { Endpoint, Method } from 'constants/api';
import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GET_CHARGES_REQUEST } from 'store/actions';
import { rootState } from 'store/types/store/state/root';
import { ComplexTable } from 'components/table/ComplexTable';
import { initialState } from 'store/reducers/admin/charge';

export const Charges = memo(() => {
  const { items } = useSelector((state: rootState) => state.charge);
  const [isTableAtt, setTableAtt] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_CHARGES_REQUEST({
      url: Endpoint.FETCH_CHARGE,
      options: {
        method: Method.GET
      }
    }));
  }, [dispatch, isTableAtt]);

  return (
    <ComplexTable
      endpoint={Endpoint.FETCH_CHARGE}
      isAtt={isTableAtt}
      init={initialState.items[0]}
      setAtt={setTableAtt}
      tableData={items}
    />
  );
});
