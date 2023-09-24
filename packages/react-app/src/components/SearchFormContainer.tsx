import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import "./SearchFormContainer.css";

const SearchFormContainer: FunctionComponent = () => {
  const [startDateDateTimePickerValue, setStartDateDateTimePickerValue] =
    useState<string | null>(null);
  const [endDateDateTimePickerValue, setEndDateDateTimePickerValue] = useState<
    string | null
  >(null);
  const navigate = useNavigate();

  const onButtonGroupContainerClick = useCallback(() => {
    navigate("/mint-the-key");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="search-form">
        <div className="form-title-group">
          <div className="search-metastays">Search METASTAYS</div>
          <div />
        </div>
        <div className="form-inputs-row">
          <div className="inputs-row">
            <Autocomplete
              className="departure-field"
              size="medium"
              disablePortal
              options={[
                "Singapore (SIN)",
                "Sydney (SYD)",
                "Siem Reap (REP)",
                "Shanghai (PVG)",
                "Sanya (SYX)",
              ]}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Location of MetaStay"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              defaultValue="Singapore -  Changi (SIN)"
            />
            <div className="start-date">
              <DatePicker
                label="Begining of MetaStay"
                value={startDateDateTimePickerValue}
                onChange={(newValue: any) => {
                  setStartDateDateTimePickerValue(newValue);
                }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    size: "medium",
                    fullWidth: true,
                    color: "primary",
                  },
                }}
              />
            </div>
            <div className="departure-field">
              <DatePicker
                label="End of MetaStay"
                value={endDateDateTimePickerValue}
                onChange={(newValue: any) => {
                  setEndDateDateTimePickerValue(newValue);
                }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    size: "medium",
                    fullWidth: true,
                    color: "primary",
                  },
                }}
              />
            </div>
          </div>
          <div className="button-group" onClick={onButtonGroupContainerClick}>
            <div className="search-flights-button">
              <div className="button1">Search</div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchFormContainer;
