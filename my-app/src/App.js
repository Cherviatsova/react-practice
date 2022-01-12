import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <Section title="Топ Недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее"></Section>
    </div>
  );
}

// export default function App() {
//   return (
//     <div>
//       {paintings.map(painting => (
//         <Painting
//           key={painting.id}
//           imageUrl={painting.url}
//           title={painting.title}
//           author={painting.author.tag}
//           profileUrl={painting.author.url}
//           price={painting.price}
//           quantity={painting.quantity}
//         />
//       ))}

//       {/* <Painting
//         imageUrl={paintings[1].url}
//         title={paintings[1].title}
//         author={paintings[1].author.tag}
//         profileUrl={paintings[1].author.url}
//         price={paintings[1].price}
//         quantity={paintings[1].quantity}
//       />
//        */}
//     </div>
//   );
// }
