import React, { useState, useEffect } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
 
 
  const { appointments, contacts, addAppointment } = props;

  useEffect(() => {
    console.log(`Title updated to ${title}`);
  }, [title]);

  useEffect(() => {
    console.log(`Contact updated to ${contact}`);
  }, [contact]);

  useEffect(() => {
    console.log(`Date updated to ${date}`);
  }, [date]);

  useEffect(() => {
    console.log(`Time updated to ${time}`);
  }, [time]);
  
  
 const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} contact={contact} date={date} time={time} setTitle={setTitle} setContact={setContact}
        setDate={setDate} setTime={setTime} contacts={contacts} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
