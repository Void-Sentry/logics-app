import { Endpoint, Method } from 'constants/api';
import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GET_DELIVERIES_REQUEST } from 'store/actions';
import { rootState } from 'store/types/store/state/root';
import ComplexTable from "./components/ComplexTable";

export const Deliveries = memo(() => {
  const { items } = useSelector((state: rootState) => state.delivery);
  const [isTableAtt, setTableAtt] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_DELIVERIES_REQUEST({
      url: Endpoint.FETCH_DELIVERY,
      options: {
        method: Method.GET
      }
    }));
  }, [dispatch, isTableAtt]);

  return <ComplexTable endpoint={Endpoint.FETCH_DELIVERY} isAtt={isTableAtt} setAtt={setTableAtt} tableData={items} />
});
