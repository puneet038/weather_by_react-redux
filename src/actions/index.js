export const addData=(edata,pdata)=>
{
    return (
        {
            type:"ADD",
            payload: {
                id:new Date().getTime().toString(),
                email:edata,
                pass:pdata
               
            }
        }
    )
}