import { useEffect, useState } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import Spinner from "../../components/Spinner/Spinner";
import PaintingStats from "../../components/StatListItem/cards/PaintingsStats";
import PurchaseTechStats from "../../components/StatListItem/cards/PurchaseTechStats";
import PurchaseTotalStats from "../../components/StatListItem/cards/PurchaseTotalStats";
import PurchaseUserStats from "../../components/StatListItem/cards/PurchaseUserStats";
import getAllStats from "../../selectors/stats/getAllStats";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PurchaseTechPriceStats from "../../components/StatListItem/cards/PurchaseTechPriceStats";

function Stats() {
  const [statData, setStatData] = useState({});
  const [loading, setLoading] = useState(true);

  const loadAllStats = () => {
    setLoading(true);
    getAllStats()
      .then((stats) => {
        setStatData(stats);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadAllStats();
  }, []);

  if (loading) return <Spinner />;

  return (
    <View>
      <ScrollView
        style={{ marginBottom: hp("2.5%") }}
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={loading}
            onRefresh={loadAllStats}
          />
        }
      >
        <PaintingStats paintingData={statData.paintingGetStats} />
        <PurchaseUserStats userData={statData.purchaseGetUserStats} />
        <PurchaseTotalStats totalStats={statData.purchaseGetTotalStats} />
        <PurchaseTechStats techStats={statData.purchaseGetTechStats} />
        <PurchaseTechPriceStats techStats={statData.purchaseGetTechStats} />
      </ScrollView>
    </View>
  );
}

export default Stats;
