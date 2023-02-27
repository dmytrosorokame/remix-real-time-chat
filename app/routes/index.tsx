import { useLoaderData } from "@remix-run/react";
import supabase from "utils/supabase";

import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({}: LoaderArgs) => {
  const { data } = await supabase.from("messages").select();

  return { data };
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
