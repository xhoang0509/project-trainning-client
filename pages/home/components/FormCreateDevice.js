import { useState } from 'react';
import Button from '../../../src/components/Button';
import InputField from '../../../src/components/Input';
import deviceApi from '../../../src/api/deviceApi';

function FormCreateDevice({ onFormSubmit, loading, setLoading }) {
  const [formValue, setFormValue] = useState({
    name: '',
    IP: '',
    power: 0,
  });

  const handleNameChange = (e) => {
    setFormValue({ ...formValue, name: e.target.value });
  };

  const handleIPChange = (e) => {
    setFormValue({ ...formValue, IP: e.target.value });
  };

  const handlePowerChange = (e) => {
    setFormValue({ ...formValue, power: parseInt(e.target.value) });
  };

  const handleSubmit = async () => {
    await deviceApi.create(formValue);
    onFormSubmit();
  };

  return (
    <div className="form__device">
      <InputField
        value={formValue.name}
        type="text"
        placeholder="Name"
        required
        onChange={handleNameChange}
      />
      <InputField
        value={formValue.IP}
        type="text"
        placeholder="IP"
        required
        onChange={handleIPChange}
      />
      <InputField
        value={formValue.power}
        type="number"
        placeholder="Power"
        min="0"
        step="1"
        required
        onChange={handlePowerChange}
      />
      <Button primary onClick={handleSubmit}>
        ADD DEVICE
      </Button>
    </div>
  );
}

export default FormCreateDevice;
