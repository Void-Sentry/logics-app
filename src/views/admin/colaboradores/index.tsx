import { Endpoint, Method } from 'constants/api';
import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GET_COLABS_REQUEST } from 'store/actions';
import { rootState } from 'store/types/store/state/root';
import ComplexTable from "./components/ComplexTable";

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

  return <ComplexTable endpoint={Endpoint.FETCH_COLAB} isAtt={isTableAtt} setAtt={setTableAtt} tableData={items} />
});
