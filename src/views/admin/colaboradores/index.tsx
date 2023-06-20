import { ComplexTable } from './table';
import { Endpoint, Method } from 'constants/api';
import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GET_COLABS_REQUEST } from 'store/actions';
import { initialState } from 'store/reducers/admin/colab';
import { rootState } from 'store/types/store/state/root';

export const Colab = memo(() => {
  const { items } = useSelector((state: rootState) => state.colab);
  const [isTableAtt, setTableAtt] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_COLABS_REQUEST({
      url: Endpoint.FETCH_COLAB,
      options: {
        method: Method.GET
      }
    }));
  }, [dispatch, isTableAtt]);

  return (
    <ComplexTable
      endpoint={Endpoint.FETCH_COLAB}
      isAtt={isTableAtt}
      init={initialState.items[0]}
      setAtt={setTableAtt}
      tableData={items}
    />
  );
});
