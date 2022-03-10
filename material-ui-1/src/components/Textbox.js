import React from 'react'
import Textfield from '@material-ui/core/Textfield'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import Items from '@material-ui/core/MenuItem'


const styles = makeStyles ({
  feild: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    display: 'block',
    //variant: 'outlined'
  }
})

function Textbox() {
  const classes = styles()
  return (
    <Box //component="form"
    sx={{
      root: { m: 1, width: '300' },
    }}
    noValidate
    autoComplete="off">
        <Textfield 
          className={classes.feild}
          label = "Left box"
          variant = "outlined"
          multiline
          maxrow = "4"
        />
        <Textfield
          className={classes.feild}
          multiline
          maxrow = "4"
        />
      <Button color="secondary" variant="outlined">
        Summit
      </Button>
      <Items color = "secondary"> 
        Item1
      </Items>
    </Box>
        
  )
}

export default Textbox