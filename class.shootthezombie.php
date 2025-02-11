<?php
class Shootthezombie {

    public function __construct(){

		add_shortcode('shoot-the-zombie', array($this, 'showbutton'));	
		
		//add html code 

    }

	

	public function showbutton(){

		echo "<button id='shootthezombie'>".__('SHOOT THE ZOMBIE!','shoot-the-zombie')."</button>";

	}

}

?>