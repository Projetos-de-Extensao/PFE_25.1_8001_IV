import "./Compra.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEventsById } from "../services/api.jsx";

function Compra() {
  const { id } = useParams();
  const [metodoSelecionado, setMetodoSelecionado] = useState(null);
  const [cupom, setCupom] = useState("");
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const data = await fetchEventsById(id);
        setEvento(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getEvent();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!evento) return <div>Evento não encontrado</div>;

  return (
    <main>
      <h2 className="titulo-pagamento">Selecione a forma de pagamento</h2>
      <section>
        <div className="espaco-compra">
          <div className="zona-de-compra">
            {/* Área esquerda - Opções de pagamento */}
            <div id="area-esquerda">
              <div className="opcoes-de-pagamento">
                {["credito", "debito", "pix", "google-pay", "boleto"].map(
                  (metodo) => (
                    <div
                      key={metodo}
                      className="caixa-cartao"
                      id={metodo}
                      onClick={() => setMetodoSelecionado(metodo)}
                      style={{
                        border:
                          metodoSelecionado === metodo ? "2px solid #f90" : "",
                      }}
                    >
                      <img
                        className="png-compra"
                        src={`/assets/images/${metodo}.png`}
                        alt={metodo}
                      />
                      <p className="balao-compra">
                        {formatarTextoMetodo(metodo)}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Cupom de desconto */}
              <div className="desconto">Desconto</div>
              <div className="caixa-de-cupom">
                <div className="icone-cupom">
                  <img
                    className="cupom-png"
                    src="/assets/images/cupom.png"
                    alt="cupom"
                  />
                  <h4>Cupom de desconto ou vale presente</h4>
                </div>
                <div className="descricao-cupom">
                  Insira o código do cupom de desconto ou vale-presente.
                </div>
                <div className="conteiner-cupom">
                  <input
                    type="text"
                    placeholder="Insira o código aqui"
                    className="cupom-input"
                    value={cupom}
                    onChange={(e) => setCupom(e.target.value)}
                  />
                  <button className="botao-aplicar">Aplicar</button>
                </div>
              </div>
            </div>

            {/* Resumo do evento */}
            <div className="resumo-do-produto">
              <h1 className="texto-resumo">Resumo do evento</h1>
              <div className="evento-foto-texto">
                <div className="foto-do-evento">
                  <img
                    src={evento.imagemUrl}
                    alt="foto-do-evento"
                    className="imagem-evento"
                  />
                </div>
                <div>
                  <p className="minitexto-resumo">{evento.nome}</p>
                  <p className="local-evento">{evento.localizacao}</p>
                </div>
              </div>
              <div className="produtos-comprados">
                <h2 className="texto-resumo-ingresso">Ingressos</h2>
                <div className="quantidade-valor">
                  <p className="texto-laranja">1x Inteira</p>
                  <p className="texto-laranja">R${evento.preco}</p>
                </div>
              </div>
              <div className="info-pagamento">
                <h3 className="texto-resumo-ingresso">Pagamento</h3>
                <p className="selecione-pagamento">
                  {metodoSelecionado
                    ? `Método: ${formatarTextoMetodo(metodoSelecionado)}`
                    : "Selecione um método de pagamento"}
                </p>
              </div>
              <div className="itens-resumo">
                <p className="texto-resumo-ingresso">Itens</p>
                <p className="texto-resumo-ingresso-trans">1x</p>
              </div>
              <div className="itens-resumo">
                <p className="minitexto-resumo">Taxa de serviço:</p>
                <p className="texto-resumo-ingresso-trans">R$5,00</p>
              </div>
              <div className="itens-resumo">
                <h3 className="total">Total</h3>
                <p className="texto-laranja">
                  R${(parseFloat(evento.preco) + 5).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="final-da-pagina">
            <button className="botao-finalizar">Finalizar compra</button>
          </div>
        </div>
      </section>
    </main>
  );
}

function formatarTextoMetodo(metodo) {
  const map = {
    credito: "Cartão de crédito",
    debito: "Cartão de débito",
    pix: "Pix",
    "google-pay": "Google Pay",
    boleto: "Boleto",
  };
  return map[metodo] || metodo;
}

export default Compra;
