import { Endpoint, Method } from 'constants/api';
import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GET_VEHICLES_REQUEST } from 'store/actions';
import { rootState } from 'store/types/store/state/root';
import ComplexTable from "./components/ComplexTable";

export const Vehicles = memo(() => {
  const { items } = useSelector((state: rootState) => state.vehicle);
  const [isTableAtt, setTableAtt] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_VEHICLES_REQUEST({
      url: Endpoint.FETCH_VEHICLE,
      options: {
        method: Method.GET
      }
    }));
  }, [dispatch, isTableAtt]);

  return <ComplexTable endpoint={Endpoint.FETCH_VEHICLE} isAtt={isTableAtt} setAtt={setTableAtt} tableData={items} />
});
