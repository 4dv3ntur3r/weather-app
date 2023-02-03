import React from "react";
import { Input, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchCity = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter City"
        color="secondary"
        sx={{ color: "#FFF", borderBottom: "2px solid #FFF" }}
        name="cityInput"
      />
      <Button
        variant="contained"
        endIcon={<SearchIcon />}
        type="submit"
        sx={{
          backgroundColor: "#434242",
          marginLeft: "10px",
          ":hover": { bgcolor: "#22A39F", color: "#222222" },
        }}
      >
        Search
      </Button>
    </form>
  );
};


export default SearchCity;