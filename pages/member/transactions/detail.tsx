import Sidebar from "@/components/organisms/Sidebar";
import TransactionsDetailContent from "@/components/organisms/TransactionsDetailContent";

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionsDetailContent />
    </section>
  );
}
