	__nest__ (
		__all__,
		'dogs_submodule', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var getTaxoTag = function () {
						return 'dog';
					};
					__pragma__ ('<all>')
						__all__.getTaxoTag = getTaxoTag;
					__pragma__ ('</all>')
				}
			}
		}
	);
		var dsm =  __init__ (__world__.dogs_submodule);
		var Dog = __class__ ('Dog', [Animal], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, py_name) {
				self.species = dsm.getTaxoTag ();
				__super__ (Dog, '__init__') (self, py_name, 'meat', 'wooof');
			});}
		});
		__pragma__ ('<use>' +
			'dogs_submodule' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Dog = Dog;
		__pragma__ ('</all>')
