import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [productList, setProductList] = useState([]);
  const [takeShapeError, setTakeShapeError] = useState("");

  useEffect(() => {
    (async()=>{
      try{
        const result = await fetch(process.env.REACT_APP_TAKESHAPE_ENDPOINT,
            {
              method: 'POST',
              headers: {
                authorization: `Bearer ${process.env.REACT_APP_TAKESHAPE_API_KEY}`
              },
              body: JSON.stringify({
                query: `
                  query{
                    BigCommerce_site{
                      bestSellingProducts{
                        edges{
                          node{
                            id
                            name
                            description
                            defaultImage{
                              urlOriginal
                            }
                            prices{
                              price{
                                value
                              }
                            }
                          }
                        }
                      }
                    }                  
                  }
                `
              })
            }
        );
  
        const resultJSON = await result.json();

        setProductList(resultJSON.data.BigCommerce_site.bestSellingProducts.edges);
        console.log("Result is", resultJSON)
      } catch (error) {
        console.log(error);
        setTakeShapeError(error);
      }
    })()
  }, [])

  return (
    <div>
      {
        takeShapeError || !productList &&
        <>
          <h1>Error connecting to TakeShape:</h1>
          <p>{takeShapeError || "Product list empty. Check query."}</p>
        </>
      }
      {
        !takeShapeError && productList &&
        <div style={{margin:'auto', width:'50%'}}>
          <h1>Product List:</h1>
          {productList.map(item=>{
            console.log(item);
            return <div key={item.node.id} 
              style={{display:'flex', flexDirection:'column'}}
            >
              <h2>{item.node.name}</h2>
              <img style={{width:"400px", margin:'auto'}}
                src={item.node.defaultImage.urlOriginal}
              ></img>
              <strong>${item.node.prices.price.value}</strong>
              <div dangerouslySetInnerHTML={{__html: item.node.description}}>                
              </div>
            </div>
          })}
        </div>
      }
    </div>
  );
}

export default App;
