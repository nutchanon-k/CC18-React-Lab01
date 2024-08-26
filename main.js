console.log(React.version)
console.log(ReactDOM.version)


function App(){
    const allName = "Nutchanon keawhawong" //prompt('input your name :')
    const birthYear = 1994 //prompt('input your birth year')
    // const birth = 7/25/1994 //prompt('input your birth year')

    const st1 = {color: 'red', backgroundColor: 'lime'}
    const st2 = {color: 'white', backgroundColor: 'black', padding : '10px'}
    // console.log(new Date().getTime())
    // console.log(new Date("1970-01-01").getTime())

    let x = new Date().getTime()
    console.log(x) //ms -> s
    // console.log(x/1000/60) //s -> min
    // console.log(x/1000/60/60) //min -> hr
    // console.log(x/1000/60/60/24) //hr -> day

    let y = new Date("1994-07-25").getTime()
    console.log(y)

    let z =x-y
    let year = z/1000/60/60/24/365.25
    console.log('Year = ' + Math.floor(year))
    let month = (year - Math.floor(year))*12
    console.log('Month = '+ Math.floor(month))
    let day = (month - Math.floor(month))*30.4375 
    console.log('Day = ' + Math.floor(day))

    return(
        <div>
            <h1 style={st1}>Name : {allName}</h1>
            <h1 style={st2}>Age : {new Date().toDateString().slice(-4)-birthYear}</h1>
            <h3 style={st2}>Age :Year = {Math.floor(year)},  Month = {Math.floor(month)}, Day = {Math.floor(day)}</h3>

        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)
