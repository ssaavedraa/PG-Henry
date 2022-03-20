import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import PurchaseFilter from "../../components/PurchaseFilter/PurchaseFilter";
import PurchaseItem from "../../components/PurchaseItem/PurchaseItem";
import Spinner from "../../components/Spinner/Spinner";
import getPurchases from "../../selectors/getPurchases";

function Purchases(props) {
  const [purchasetData, setPurchaseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
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
  }, [filter]);

  if (loading) return <Spinner />;
  return (
    <>
      <FlatList
        data={purchasetData}
        renderItem={({ item }) => <PurchaseItem purchase={item} {...props} />}
        keyExtractor={(item) => item.id}
      />
      <PurchaseFilter setFilter={setFilter} filter={filter} />
    </>
  );
}

export default Purchases;
