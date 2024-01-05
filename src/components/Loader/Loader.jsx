import { Box, CircularProgress, Stack } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Box minHeight={'90vh'}>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
            <CircularProgress />
        </Stack>
    </Box>
  )
}

export default Loader