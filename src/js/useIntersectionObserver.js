// import { useEffect, useState, useRef } from "react"

// /*
// 	Hook that tracks if a given element is in the window or not
// 	https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
// */
// export const useIntersectionObserver = () => {
// 	const [entry, updateEntry] = useState({})
// 	const [node, setNode] = useState(null)

// 	const observer = useRef(
// 		new window.IntersectionObserver(([entry]) => updateEntry(entry))
// 	)

// 	useEffect(() => {
// 		const { current: currentObserver } = observer
// 		currentObserver.disconnect()
// 		if (node) currentObserver.observe(node)
// 		return () => observer.current.disconnect()
// 	}, [node])

// 	return [setNode, entry]
// }

import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = ({ r = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      r,
      rootMargin,
      threshold
    })
  );

  useEffect(
    () => {
      const { current: currentObserver } = observer;
      currentObserver.disconnect();

      if (node) currentObserver.observe(node);

      return () => currentObserver.disconnect();
    },
    [node]
  );

  return [setNode, entry];
};