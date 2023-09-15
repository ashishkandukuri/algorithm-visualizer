import sort from "../images/sort.png";
import primes from "../images/prime.webp";

export function getDetails() {
  return [
    {
      id: 1,
      title: "Sorting Algorithm",
      description: "Compare different sorting algorithms",
      route: "/sort",
      img: sort,
    },
    {
      id: 2,
      title: "Prime Numbers",
      description: "Visualize how Seive is better than brute force",
      route: "/prime",
      img: primes,
    },
  ];
}
