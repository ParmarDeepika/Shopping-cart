const CURRENY_FORMATTER= new Intl.NumberFormat(undefined,{
    currency:"USD",style:"currency"
})
export function formatCurrency(number:number){
  return CURRENY_FORMATTER.format(number)
}