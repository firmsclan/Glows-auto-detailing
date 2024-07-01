import Header from '@/components/src/server/header';
import TrioCards from '@/components/src/server/trio-cards';
import { content, footerContent, headerContent } from '../components/content/content'; // Adjust path as needed

export default function Home() {
  const { trioCards } = content.homePage;

  return (
    <main>
      <Header content={headerContent} />
      <TrioCards content={trioCards} />
    </main>
  );
}
