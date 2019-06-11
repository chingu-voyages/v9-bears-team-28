import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function NavBar() {
	return (
		<div>
			<AppBar position="static">
				<Typography variant="h3" color="inherit">
					VANT-EDG
				</Typography>
			</AppBar>
		</div>
	);
}
