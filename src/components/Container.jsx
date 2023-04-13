import { useState } from "react"
import { Card_uno } from "../components/Card-uno/Card_uno"
import { Card_dos } from "../components/Card-dos/Card_dos"
import { Card_tres } from "../components/Card-tres/Card_tres"
import { Card_cuatro } from "../components/Card-cuatro/Card_cuatro"
import { Card_cinco } from "../components/Card-cinco/Card_cinco"
import { Card_seis } from "../components/Card-seis/Card_seis"

export const Container = ({ card }) => {

    if (card === 1) {
        return <Card_uno />;
      }
    
      if (card === 2) {
        return <Card_dos />;
      }
    
      if (card === 3) {
        return <Card_tres />;
      }
    
      if (card === 4) {
        return <Card_cuatro />;
      }
    
      if (card === 5) {
        return <Card_cinco />;
      }
    
      if (card === 6) {
        return <Card_seis />;
      }
}