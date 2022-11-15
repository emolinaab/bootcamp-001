
function Validation(props) {

  return (
    <>
      <h2>Lives: </h2>
      <h2 id="varLives">{props.Lives}</h2>
      <div id="Points">
        <h2 >Points: </h2>
        <h2 id="varPoints">{props.Points}</h2>
      </div>
    </>

  )
}
export default Validation; 