import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import api from "../../Services";

export const Login = () => {
  const history = useHistory();
  const [error, setError] = useState({});
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    api
      .post("sessions/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("@Habits:token", JSON.stringify(access));
        history.push("/dashboard");
      })
      .catch((err) => {
        setError({ message: "Username ou Senha invalidos" });
      });
  };

  return (
    <div>
      {error?.message}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nome de Usuário" {...register("username")} />
        {errors.username?.message}
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Logar</button>
      </form>
    </div>
  );
};
