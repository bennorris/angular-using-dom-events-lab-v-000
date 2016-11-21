function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ dis.count }}</div>',
			'</div>'
		].join(''),
		require: 'counter',
		controller: function () {
			this.count = 0;
		},
		controllerAs: "dis",
		link: function(scope, element, attrs, ctrl) {
			element.on('click', function () {
            ctrl.count = ctrl.count + 1;
						scope.$apply();
		});

			scope.$on('$destroy', function () {
				 element.off();
			 })
     }
  }
 }
angular
	.module('app')
	.directive('counter', Counter);
