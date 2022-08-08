"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8],{61004:function(e){e.exports=JSON.parse('{"functions":[{"name":"WhatIsThis","desc":"This takes a compressed value and returns the identification related to it, and does the reverse.\\t\\n\\n```lua\\n\\tprint(BridgeNet.WhatIsThis(\\"SomeIdentificationStringHere\\")) -- prints the compressed value\\n```","params":[{"name":"str","desc":"","lua_type":"string"},{"name":"toSend","desc":"","lua_type":"\\"id\\" | \\"compressed\\""}],"returns":[{"desc":"","lua_type":"string?"}],"function_type":"static","source":{"line":54,"path":"src/serdeLayer.lua"}},{"name":"CreateIdentifier","desc":"This creates an identifier and associates it with a compressed value. This is shared between the server and the client.\\nIf the identifier already exists, it will be returned.\\n\\n```lua\\n\\tBridgeNet.CreateIdentifier(\\"Something\\")\\n\\t\\n\\tprint(BridgeNet.WhatIsThis(\\"Something\\", \\"compressed\\"))\\n```","params":[{"name":"id","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"static","source":{"line":76,"path":"src/serdeLayer.lua"}},{"name":"DestroyIdentifier","desc":"This creates an identifier and associates it with a compressed value. This is shared between the server and the client.\\n\\n```lua\\n\\tBridgeNet.DestroyIdentifier(\\"Something\\")\\n\\t\\n\\tprint(BridgeNet.WhatIsThis(\\"Something\\", \\"compressed\\")) -- Errors\\n```","params":[{"name":"id","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"static","source":{"line":111,"path":"src/serdeLayer.lua"}}],"properties":[],"types":[],"name":"serdeLayer","desc":"This module handles serialization and deserialization for you.","source":{"line":14,"path":"src/serdeLayer.lua"}}')}}]);