import { useEffect, useState } from "react";
import { RefreshControl, View, FlatList } from "react-native";
import PurchaseFilter from "../../components/PurchaseFilter/PurchaseFilter";
import PurchaseItem from "../../components/PurchaseItem/PurchaseItem";
import Spinner from "../../components/Spinner/Spinner";
import getPurchases from "../../selectors/getPurchases";

function Purchases(props) {
  const [purchasetData, setPurchaseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const loadPurchases = () => {
    setLoading(true);
    getPurchases(filter)
      .then((purchases) => {
        setPurchaseData(purchases);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadPurchases();
  }, [filter]);

  if (loading) return <Spinner />;
  return (
    <>
      <PurchaseFilter setFilter={setFilter} filter={filter} />
      <FlatList
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={loading}
            onRefresh={loadPurchases}
          />
        }
        data={purchasetData}
        renderItem={({ item }) => (
          <PurchaseItem
            loadPurchases={loadPurchases}
            purchase={item}
            {...props}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

export default Purchases;
