import { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../";
import { ApiService } from "../../service/api.service";

const Main = () => {
  const [selectCategory, setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([])

  const selectedCategoryHandler = (category) => setSelectCategory(category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectCategory}`)
        setVideos(data.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [selectCategory])

  return (
    <Stack>
      <Category selectedCategoryHandler={selectedCategoryHandler} selectCategory={selectCategory} />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectCategory}
            <span style={{ color: colors.secondary }}> Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
