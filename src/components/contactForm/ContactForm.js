import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <p className='dup-name' style={{ color: 'red' }}>Duplicate name</p>
      <input type="text" name="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="^[2-9]\d{2}-\d{3}-\d{4}$" title="Please enter a valid phone #" />
      <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="submit" value="Add" />
    </form>
  );
};
