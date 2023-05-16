import { Endpoint, Method } from 'constants/api';
import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GET_ROUTES_REQUEST } from 'store/actions';
import { rootState } from 'store/types/store/state/root';
import ComplexTable from "./components/ComplexTable";

export const Routes = memo(() => {
  const { items } = useSelector((state: rootState) => state.route);
  const [isTableAtt, setTableAtt] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_ROUTES_REQUEST({
      url: Endpoint.FETCH_ROUTE,
      options: {
        method: Method.GET
      }
    }));
  }, [dispatch, isTableAtt]);

  return <ComplexTable endpoint={Endpoint.FETCH_ROUTE} isAtt={isTableAtt} setAtt={setTableAtt} tableData={items} />
});
