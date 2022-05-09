import { useState } from "react";
import "./App.css";
import { AddressAutofill } from "@mapbox/search-js-react";

function App() {
  const token = "add your own API Key";
  const defaultAddress = {
    address: "",
    unit: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
  };
  const [address, setAddress] = useState(defaultAddress);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
  };

  return (
    <div className="app">
      <h3>MapBox AutoComplete</h3>

      <form onSubmit={(e) => handleSubmit(e)}>
        <AddressAutofill accessToken={token}>
          <input
            name="address"
            value={address.address}
            placeholder="Address"
            type="text"
            autoComplete="address-line1"
            onChange={handleInputChange}
          />
        </AddressAutofill>
        <input
          name="unit"
          value={address.unit}
          placeholder="Unit number"
          type="text"
          autoComplete="address-line2"
          onChange={handleInputChange}
        />
        <input
          name="city"
          value={address.city}
          placeholder="City"
          type="text"
          autoComplete="address-level2"
          onChange={handleInputChange}
        />
        <input
          name="state"
          value={address.state}
          placeholder="State"
          type="text"
          autoComplete="address-level1"
          onChange={handleInputChange}
        />
        <input
          name="country"
          value={address.country}
          placeholder="Country"
          type="text"
          autoComplete="country"
          onChange={handleInputChange}
        />
        <input
          name="postcode"
          value={address.postcode}
          placeholder="Postcode"
          type="text"
          autoComplete="postal-code"
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
