import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCarTypes {
  name: string;
  index: number;
}

export default function ReservationCard({ name, index }: ReservationCarTypes) {
    const dispatch=useDispatch();
  return <div onClick={()=>{
    dispatch(removeReservation(index))
  }} className="reservation-card-container">{name}</div>;
}
