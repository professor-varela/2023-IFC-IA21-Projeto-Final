import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    height: 100vh;

    > * {
        flex-grow: 1
    }

    .image {
        background-color: #9bc9b6;
        color: #FFFFFF
    }

    .container-login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        form {
            font-size: 1.5rem;
            padding: 2rem;

            div {
                margin-bottom: 1rem;

                label {
                    display: block;
                    color: #5b5b5b;
                }

                input {
                    font-size: 1.5rem;
                    padding: .5rem;
                    border: 0 none;
                    border-bottom: 1px solid black;
                    outline: none;
                }

                button {
                    border: 0 none;
                    border-radius: 12px;
                    padding: .5rem;
                    font-size: 1.25rem;
                    background: #5e5e5e;
                    color: #FFFFFF;
                }
            }
        }
    }
`


export default () => <>
    <Container>
        <div className="image">
            ...
        </div>
        <div className="container-login-form">
            <form>
                <div>
                    <label>Login</label>
                    <input name="login" />
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button>entrar</button>
                    <button>recuperar senha</button>
                </div>
            </form>
        </div>
    </Container>
</>