import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
// For Supabase testing purposes
const supabase = createClient(
	"https://qqzmrdvrysbjgumltrrf.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxem1yZHZyeXNiamd1bWx0cnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMTUzMzIsImV4cCI6MjAxMzY5MTMzMn0.T5h8Z3TPSCVti2i2Oqp-ifdhiSyevBxhUArmq4ZqREw"
);

function Countries() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getCountries();
	}, []);

	async function getCountries() {
		const { data } = await supabase.from("countries").select();
		setCountries(data);
	}

	return (
		<ul>
			{countries.map((country) => (
				<li key={country.name}>{country.name}</li>
			))}
		</ul>
	);
}

export default Countries;
