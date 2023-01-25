import { createContext, useState } from 'react';

const URLShortening = createContext({
  selected: false,
  updateSelected: (newSelected) => {},
});

export function URLShorteningProvider(props) {
  const [selectedState, setSelectedState] = useState(false);

  function updSelected(selectedData) {
    setSelectedState((prevSelectedData) => {
      return selectedData;
    });
  }

  const context = {
    selected: selectedState,
    updateSelected: updSelected,
  };

  return (
    <URLShortening.Provider value={context}>
      {props.children}
    </URLShortening.Provider>
  );
}

export default URLShortening;
