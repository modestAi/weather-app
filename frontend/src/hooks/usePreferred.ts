import useLocalStorage from "./useLocalStorage";

export const usePreferred = () => {
  const [preferredUnit, setPreferredUnit] = useLocalStorage(
    "preferred_unit",
    "metric"
  );

  return {
    preferredUnit,
    setPreferredUnit,
  };
};
