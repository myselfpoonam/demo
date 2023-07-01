import React, { useState } from "react";
import { GrNotes } from "react-icons/gr";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Calculation from "./Calculation";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

const Terms = () => {
  const [capacitys, setCapacitys] = useState();
  const [renewalFrom, setRenewalFrom] = useState();
  const [renewalTo, setRenewalTo] = useState();
  const [tax, setTax] = useState();
  const schema = yup.object().shape({
    vehicles: yup.string().required("Vehicle Type is required"),
    years: yup.string().required("Year of Manufacture is required"),
    capacity: yup.string().required("Vehicle Capacity is required"),
    date: yup.date().required("Last Renewal From is required"),
    dates: yup.date().required("Last Renewal To is required"),
    thirdPartyInsurance: yup.boolean(),
  });

  //   function Calculations() {
  //     // alert(capacitys);

  //     if (capacitys > 150) {
  //     }
  //   }
  //   function calculateTax(capacity) {
  //     if (capacity > 300) {
  //       return 2000;
  //     } else if (capacity > 225) {
  //       return 1150;
  //     } else if (capacitys > 150) {
  //       return 1000;
  //     }
  //   }
  function calculateTax() {
    if (capacitys <= 150) {
      return 1000;
    } else if (capacitys <= 220) {
      return 1500;
    } else if (capacitys <= 225) {
      return 1150;
    } else return 2000;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    const calculatedTax = calculateTax(parseInt(data.capacity));
    const date1 = dayjs(data.date, "YYYY-MM-DD");
    const date2 = dayjs(data.dates, "YYYY-MM-DD");

    const years = date2.diff(date1, "year");

    let taxValue;
    if (years === 1) {
      taxValue = calculatedTax;
    } else if (years === 2) {
      taxValue = calculatedTax * 2;
    } else {
      taxValue = calculatedTax * 3;
    }
    setTax(taxValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 ">
          <div className="bg-purple-500 h-8 w-8 flex justify-center items-center rounded-full">
            <GrNotes />
          </div>
          <div className="text-purple-700 font-bold flex justify-center items-center ">
            TERMS AND CONDITIONS
          </div>
        </div>
        <div className="pt-6 ">
          <input
            type="text"
            placeholder="Vehicle Type"
            className="border-2  w-full rounded-lg p-2"
            list="vehicle"
            {...register("vehicles")}
          />
          <datalist id="vehicle">
            <option value="2 Wheels">2 Wheels</option>
            <option value="4 Wheels">4 Wheels</option>
          </datalist>
          <div className="text-red-500 text-sm">
            {errors.vehicles && <p>{errors.vehicles.message}</p>}
          </div>
          <div className="flex flex-col mt-4">
            <div>
              <input
                type="text"
                className="border-2  w-full rounded-lg p-2"
                placeholder="Year of Manufacture(YYYY) AD"
                {...register("years")}
              />
            </div>
            <div className="text-red-500 text-sm">
              {errors.years && <p>{errors.years.message}</p>}
            </div>
            <div>
              <input
                type="text"
                className="mt-4 border-2  w-full  rounded-lg p-2"
                placeholder="Vehicle Cubic Capacity (CC)"
                {...register("capacity")}
                onChange={(event) => {
                  setCapacitys(event.target.value);
                }}
              />
            </div>
            <div className="text-red-500 text-sm">
              {errors.capacity && <p>{errors.capacity.message}</p>}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-sm">Last Renewal From(BS)</p>

            <input
              type="date"
              className="mt-2 text-gray-400 border-2  w-full  rounded-lg p-2"
              placeholder="YYYY"
              {...register("date")}
              onChange={(event) => {
                setRenewalFrom(event.target.value);
              }}
            />
          </div>
          <div className="text-red-500 text-sm">
            {errors.date && <p>{errors.date.message}</p>}
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-sm">Last Renewal To(AD)</p>

            <input
              type="date"
              className="mt-2 border-2 text-gray-400  w-full  rounded-lg p-2"
              placeholder="YYYY"
              {...register("dates")}
              onChange={(event) => {
                setRenewalTo(event.target.value);
              }}
            />
          </div>
          <div className="text-red-500 text-sm">
            {errors.dates && <p>{errors.dates.message}</p>}
          </div>
          <div className="gap-2 flex  mt-6">
            <div>
              <input type="checkbox" {...register("thirdPartyInsurance")} />
            </div>
            <div className="text-red-500 text-sm"></div>
            <div className="text-sm flex justify-center">
              Get Third Party Insurance
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="bg-purple-700 w-full font-bold text-white p-3 rounded-lg"
          >
            CALCULATE
          </button>
        </div>
      </form>
      <h2>Total Tax: {tax}</h2>
      <p>Renewal From: {renewalFrom}</p>
      <p>Renewal To: {renewalTo}</p>
    </div>
  );
};

export default Terms;
