import Signup from "./components/Signup"

function LoginPage(){
    return(
        <div className="back">
            <h3 className="text-white">К сожалению сайт не поддерживает авторизацию, 
                но вы можете заранее зарагестрироваться, 
                чтобы при оформлении заказа указать 
                только почту, к которой привязан аккаунт.
                Остальное поручите нам!
                Приятного шоппинга!</h3>
        <Signup/>
        </div>
    )
}

export default LoginPage