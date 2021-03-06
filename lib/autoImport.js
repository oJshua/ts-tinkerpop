// autoImport.ts
// This file was generated by ts-java.
/// <reference path="java.d.ts" />
var java = require('java');
function autoImport(shortName) {
    var shortToLongNameMap = {
        'GlobFunction': 'co.redseal.gremlinnode.function.GlobFunction',
        'GroovyLambda': 'co.redseal.gremlinnode.function.GroovyLambda',
        'TestClass': 'co.redseal.gremlinnode.testing.TestClass',
        'Binding': 'groovy.lang.Binding',
        'Closure': 'groovy.lang.Closure',
        'DelegatingMetaClass': 'groovy.lang.DelegatingMetaClass',
        'GroovyClassLoader': 'groovy.lang.GroovyClassLoader',
        'GroovyCodeSource': 'groovy.lang.GroovyCodeSource',
        'GroovyObjectSupport': 'groovy.lang.GroovyObjectSupport',
        'GroovyResourceLoader': 'groovy.lang.GroovyResourceLoader',
        'IntRange': 'groovy.lang.IntRange',
        'MetaBeanProperty': 'groovy.lang.MetaBeanProperty',
        'MetaClass': 'groovy.lang.MetaClass',
        'MetaMethod': 'groovy.lang.MetaMethod',
        'MetaProperty': 'groovy.lang.MetaProperty',
        'Range': 'groovy.lang.Range',
        'Reference': 'groovy.lang.Reference',
        'ByteArrayOutputStream': 'java.io.ByteArrayOutputStream',
        'FileInputStream': 'java.io.FileInputStream',
        'FileOutputStream': 'java.io.FileOutputStream',
        'Boolean': 'java.lang.Boolean',
        'Class': 'java.lang.Class',
        'ClassLoader': 'java.lang.ClassLoader',
        'Double': 'java.lang.Double',
        'Enum': 'java.lang.Enum',
        'Float': 'java.lang.Float',
        'Integer': 'java.lang.Integer',
        'Iterable': 'java.lang.Iterable',
        'Long': 'java.lang.Long',
        'Object': 'java.lang.Object',
        'Array': 'java.lang.reflect.Array',
        'Short': 'java.lang.Short',
        'String': 'java.lang.String',
        'Charset': 'java.nio.charset.Charset',
        'StandardCharsets': 'java.nio.charset.StandardCharsets',
        'AbstractCollection': 'java.util.AbstractCollection',
        'AbstractList': 'java.util.AbstractList',
        'AbstractMap': 'java.util.AbstractMap',
        'AbstractSet': 'java.util.AbstractSet',
        'ArrayList': 'java.util.ArrayList',
        'Collection': 'java.util.Collection',
        'Comparator': 'java.util.Comparator',
        'BiConsumer': 'java.util.function.BiConsumer',
        'BiFunction': 'java.util.function.BiFunction',
        'BinaryOperator': 'java.util.function.BinaryOperator',
        'BiPredicate': 'java.util.function.BiPredicate',
        'Consumer': 'java.util.function.Consumer',
        'Function': 'java.util.function.Function',
        'Predicate': 'java.util.function.Predicate',
        'Supplier': 'java.util.function.Supplier',
        'UnaryOperator': 'java.util.function.UnaryOperator',
        'HashMap': 'java.util.HashMap',
        'HashSet': 'java.util.HashSet',
        'Iterator': 'java.util.Iterator',
        'LinkedHashMap': 'java.util.LinkedHashMap',
        'List': 'java.util.List',
        'ListIterator': 'java.util.ListIterator',
        'Map': 'java.util.Map',
        'Map$Entry': 'java.util.Map$Entry',
        'NoSuchElementException': 'java.util.NoSuchElementException',
        'Set': 'java.util.Set',
        'AbstractScriptEngine': 'javax.script.AbstractScriptEngine',
        'Bindings': 'javax.script.Bindings',
        'CompiledScript': 'javax.script.CompiledScript',
        'ScriptContext': 'javax.script.ScriptContext',
        'ScriptEngine': 'javax.script.ScriptEngine',
        'ScriptEngineFactory': 'javax.script.ScriptEngineFactory',
        'GComparator': 'org.apache.tinkerpop.gremlin.groovy.function.GComparator',
        'GFunction': 'org.apache.tinkerpop.gremlin.groovy.function.GFunction',
        'GSupplier': 'org.apache.tinkerpop.gremlin.groovy.function.GSupplier',
        'GUnaryOperator': 'org.apache.tinkerpop.gremlin.groovy.function.GUnaryOperator',
        'GremlinGroovyScriptEngine': 'org.apache.tinkerpop.gremlin.groovy.jsr223.GremlinGroovyScriptEngine',
        'ClusterCountMapReduce': 'org.apache.tinkerpop.gremlin.process.computer.clustering.peerpressure.ClusterCountMapReduce',
        'ClusterCountMapReduce$Builder': 'org.apache.tinkerpop.gremlin.process.computer.clustering.peerpressure.ClusterCountMapReduce$Builder',
        'ClusterPopulationMapReduce': 'org.apache.tinkerpop.gremlin.process.computer.clustering.peerpressure.ClusterPopulationMapReduce',
        'ClusterPopulationMapReduce$Builder': 'org.apache.tinkerpop.gremlin.process.computer.clustering.peerpressure.ClusterPopulationMapReduce$Builder',
        'PeerPressureVertexProgram': 'org.apache.tinkerpop.gremlin.process.computer.clustering.peerpressure.PeerPressureVertexProgram',
        'PeerPressureVertexProgram$Builder': 'org.apache.tinkerpop.gremlin.process.computer.clustering.peerpressure.PeerPressureVertexProgram$Builder',
        'ComputerResult': 'org.apache.tinkerpop.gremlin.process.computer.ComputerResult',
        'GraphComputer': 'org.apache.tinkerpop.gremlin.process.computer.GraphComputer',
        'GraphComputer$Exceptions': 'org.apache.tinkerpop.gremlin.process.computer.GraphComputer$Exceptions',
        'GraphComputer$Features': 'org.apache.tinkerpop.gremlin.process.computer.GraphComputer$Features',
        'GraphComputer$Isolation': 'org.apache.tinkerpop.gremlin.process.computer.GraphComputer$Isolation',
        'GraphComputer$Persist': 'org.apache.tinkerpop.gremlin.process.computer.GraphComputer$Persist',
        'GraphComputer$ResultGraph': 'org.apache.tinkerpop.gremlin.process.computer.GraphComputer$ResultGraph',
        'KeyValue': 'org.apache.tinkerpop.gremlin.process.computer.KeyValue',
        'MapReduce': 'org.apache.tinkerpop.gremlin.process.computer.MapReduce',
        'MapReduce$MapEmitter': 'org.apache.tinkerpop.gremlin.process.computer.MapReduce$MapEmitter',
        'MapReduce$NullObject': 'org.apache.tinkerpop.gremlin.process.computer.MapReduce$NullObject',
        'MapReduce$ReduceEmitter': 'org.apache.tinkerpop.gremlin.process.computer.MapReduce$ReduceEmitter',
        'MapReduce$Stage': 'org.apache.tinkerpop.gremlin.process.computer.MapReduce$Stage',
        'Memory': 'org.apache.tinkerpop.gremlin.process.computer.Memory',
        'Memory$Admin': 'org.apache.tinkerpop.gremlin.process.computer.Memory$Admin',
        'Memory$Exceptions': 'org.apache.tinkerpop.gremlin.process.computer.Memory$Exceptions',
        'MessageCombiner': 'org.apache.tinkerpop.gremlin.process.computer.MessageCombiner',
        'MessageScope': 'org.apache.tinkerpop.gremlin.process.computer.MessageScope',
        'MessageScope$Global': 'org.apache.tinkerpop.gremlin.process.computer.MessageScope$Global',
        'MessageScope$Local': 'org.apache.tinkerpop.gremlin.process.computer.MessageScope$Local',
        'MessageScope$Local$ReverseTraversalSupplier': 'org.apache.tinkerpop.gremlin.process.computer.MessageScope$Local$ReverseTraversalSupplier',
        'Messenger': 'org.apache.tinkerpop.gremlin.process.computer.Messenger',
        'PageRankMapReduce': 'org.apache.tinkerpop.gremlin.process.computer.ranking.pagerank.PageRankMapReduce',
        'PageRankMapReduce$Builder': 'org.apache.tinkerpop.gremlin.process.computer.ranking.pagerank.PageRankMapReduce$Builder',
        'PageRankMessageCombiner': 'org.apache.tinkerpop.gremlin.process.computer.ranking.pagerank.PageRankMessageCombiner',
        'PageRankVertexProgram': 'org.apache.tinkerpop.gremlin.process.computer.ranking.pagerank.PageRankVertexProgram',
        'PageRankVertexProgram$Builder': 'org.apache.tinkerpop.gremlin.process.computer.ranking.pagerank.PageRankVertexProgram$Builder',
        'SingleMessenger': 'org.apache.tinkerpop.gremlin.process.computer.traversal.SingleMessenger',
        'TraversalClassSupplier': 'org.apache.tinkerpop.gremlin.process.computer.traversal.TraversalClassSupplier',
        'TraversalScriptSupplier': 'org.apache.tinkerpop.gremlin.process.computer.traversal.TraversalScriptSupplier',
        'TraversalSupplier': 'org.apache.tinkerpop.gremlin.process.computer.traversal.TraversalSupplier',
        'TraversalVertexProgram': 'org.apache.tinkerpop.gremlin.process.computer.traversal.TraversalVertexProgram',
        'TraversalVertexProgram$Builder': 'org.apache.tinkerpop.gremlin.process.computer.traversal.TraversalVertexProgram$Builder',
        'TraversalVertexProgramMessageCombiner': 'org.apache.tinkerpop.gremlin.process.computer.traversal.TraversalVertexProgramMessageCombiner',
        'TraverserExecutor': 'org.apache.tinkerpop.gremlin.process.computer.traversal.TraverserExecutor',
        'VertexTraversalSideEffects': 'org.apache.tinkerpop.gremlin.process.computer.traversal.VertexTraversalSideEffects',
        'ScriptEngineLambda': 'org.apache.tinkerpop.gremlin.process.computer.util.ScriptEngineLambda',
        'VertexProgram': 'org.apache.tinkerpop.gremlin.process.computer.VertexProgram',
        'VertexProgram$Builder': 'org.apache.tinkerpop.gremlin.process.computer.VertexProgram$Builder',
        'VertexProgram$Features': 'org.apache.tinkerpop.gremlin.process.computer.VertexProgram$Features',
        '__': 'org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.__',
        'DefaultGraphTraversal': 'org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.DefaultGraphTraversal',
        'EmptyGraphTraversal': 'org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.EmptyGraphTraversal',
        'GraphTraversal': 'org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversal',
        'GraphTraversal$Admin': 'org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversal$Admin',
        'GraphTraversalSource': 'org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversalSource',
        'GraphTraversalSource$Builder': 'org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversalSource$Builder',
        'ComputerTraversalEngine': 'org.apache.tinkerpop.gremlin.process.traversal.engine.ComputerTraversalEngine',
        'ComputerTraversalEngine$Builder': 'org.apache.tinkerpop.gremlin.process.traversal.engine.ComputerTraversalEngine$Builder',
        'StandardTraversalEngine': 'org.apache.tinkerpop.gremlin.process.traversal.engine.StandardTraversalEngine',
        'StandardTraversalEngine$Builder': 'org.apache.tinkerpop.gremlin.process.traversal.engine.StandardTraversalEngine$Builder',
        'FastNoSuchElementException': 'org.apache.tinkerpop.gremlin.process.traversal.FastNoSuchElementException',
        'Path': 'org.apache.tinkerpop.gremlin.process.traversal.Path',
        'Path$Exceptions': 'org.apache.tinkerpop.gremlin.process.traversal.Path$Exceptions',
        'Scope': 'org.apache.tinkerpop.gremlin.process.traversal.Scope',
        'Step': 'org.apache.tinkerpop.gremlin.process.traversal.Step',
        'AbstractStep': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.AbstractStep',
        'BulkSet': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.BulkSet',
        'CollectingBarrierStep': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.CollectingBarrierStep',
        'ComputerAwareStep': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.ComputerAwareStep',
        'ComputerAwareStep$EndStep': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.ComputerAwareStep$EndStep',
        'ElementFunctionComparator': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.ElementFunctionComparator',
        'ElementValueComparator': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.ElementValueComparator',
        'EmptyPath': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.EmptyPath',
        'EmptyStep': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.EmptyStep',
        'ExpandableStepIterator': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.ExpandableStepIterator',
        'HasContainer': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.HasContainer',
        'ImmutablePath': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.ImmutablePath',
        'MapHelper': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.MapHelper',
        'MarkerIdentityStep': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.MarkerIdentityStep',
        'MutablePath': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.MutablePath',
        'NoOpBarrierStep': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.NoOpBarrierStep',
        'PathIdentityStep': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.PathIdentityStep',
        'ReducingBarrierStep': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.ReducingBarrierStep',
        'ReducingBarrierStep$DefaultMapReduce': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.ReducingBarrierStep$DefaultMapReduce',
        'ReducingBarrierStep$FinalGet': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.ReducingBarrierStep$FinalGet',
        'SparsePath': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.SparsePath',
        'SupplyingBarrierStep': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.SupplyingBarrierStep',
        'TraversalComparator': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.TraversalComparator',
        'Tree': 'org.apache.tinkerpop.gremlin.process.traversal.step.util.Tree',
        'ElementIdStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.decoration.ElementIdStrategy',
        'ElementIdStrategy$Builder': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.decoration.ElementIdStrategy$Builder',
        'EventStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.decoration.EventStrategy',
        'EventStrategy$Builder': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.decoration.EventStrategy$Builder',
        'EventStrategy$EventStrategyCallback': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.decoration.EventStrategy$EventStrategyCallback',
        'PartitionStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.decoration.PartitionStrategy',
        'PartitionStrategy$Builder': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.decoration.PartitionStrategy$Builder',
        'SubgraphStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.decoration.SubgraphStrategy',
        'SubgraphStrategy$Builder': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.decoration.SubgraphStrategy$Builder',
        'ComparatorHolderRemovalStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.verification.ComparatorHolderRemovalStrategy',
        'EngineDependentStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.verification.EngineDependentStrategy',
        'LabeledEndStepStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.verification.LabeledEndStepStrategy',
        'LambdaRestrictionStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.verification.LambdaRestrictionStrategy',
        'ReadOnlyStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.verification.ReadOnlyStrategy',
        'TraversalVerificationStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.strategy.verification.TraversalVerificationStrategy',
        'T': 'org.apache.tinkerpop.gremlin.process.traversal.T',
        'Traversal': 'org.apache.tinkerpop.gremlin.process.traversal.Traversal',
        'Traversal$Admin': 'org.apache.tinkerpop.gremlin.process.traversal.Traversal$Admin',
        'Traversal$Exceptions': 'org.apache.tinkerpop.gremlin.process.traversal.Traversal$Exceptions',
        'TraversalEngine': 'org.apache.tinkerpop.gremlin.process.traversal.TraversalEngine',
        'TraversalEngine$Builder': 'org.apache.tinkerpop.gremlin.process.traversal.TraversalEngine$Builder',
        'TraversalEngine$Type': 'org.apache.tinkerpop.gremlin.process.traversal.TraversalEngine$Type',
        'TraversalSideEffects': 'org.apache.tinkerpop.gremlin.process.traversal.TraversalSideEffects',
        'TraversalSideEffects$Exceptions': 'org.apache.tinkerpop.gremlin.process.traversal.TraversalSideEffects$Exceptions',
        'TraversalSource': 'org.apache.tinkerpop.gremlin.process.traversal.TraversalSource',
        'TraversalSource$Builder': 'org.apache.tinkerpop.gremlin.process.traversal.TraversalSource$Builder',
        'TraversalStrategies': 'org.apache.tinkerpop.gremlin.process.traversal.TraversalStrategies',
        'TraversalStrategies$GlobalCache': 'org.apache.tinkerpop.gremlin.process.traversal.TraversalStrategies$GlobalCache',
        'TraversalStrategy': 'org.apache.tinkerpop.gremlin.process.traversal.TraversalStrategy',
        'Traverser': 'org.apache.tinkerpop.gremlin.process.traversal.Traverser',
        'Traverser$Admin': 'org.apache.tinkerpop.gremlin.process.traversal.Traverser$Admin',
        'TraverserGenerator': 'org.apache.tinkerpop.gremlin.process.traversal.TraverserGenerator',
        'DefaultTraversal': 'org.apache.tinkerpop.gremlin.process.traversal.util.DefaultTraversal',
        'DefaultTraversalSideEffects': 'org.apache.tinkerpop.gremlin.process.traversal.util.DefaultTraversalSideEffects',
        'DefaultTraversalStrategies': 'org.apache.tinkerpop.gremlin.process.traversal.util.DefaultTraversalStrategies',
        'DependantMutableMetrics': 'org.apache.tinkerpop.gremlin.process.traversal.util.DependantMutableMetrics',
        'EmptyTraversal': 'org.apache.tinkerpop.gremlin.process.traversal.util.EmptyTraversal',
        'EmptyTraversalSideEffects': 'org.apache.tinkerpop.gremlin.process.traversal.util.EmptyTraversalSideEffects',
        'EmptyTraversalStrategies': 'org.apache.tinkerpop.gremlin.process.traversal.util.EmptyTraversalStrategies',
        'ImmutableMetrics': 'org.apache.tinkerpop.gremlin.process.traversal.util.ImmutableMetrics',
        'Metrics': 'org.apache.tinkerpop.gremlin.process.traversal.util.Metrics',
        'MutableMetrics': 'org.apache.tinkerpop.gremlin.process.traversal.util.MutableMetrics',
        'SideEffectHelper': 'org.apache.tinkerpop.gremlin.process.traversal.util.SideEffectHelper',
        'StandardTraversalMetrics': 'org.apache.tinkerpop.gremlin.process.traversal.util.StandardTraversalMetrics',
        'StepPosition': 'org.apache.tinkerpop.gremlin.process.traversal.util.StepPosition',
        'TraversalHelper': 'org.apache.tinkerpop.gremlin.process.traversal.util.TraversalHelper',
        'TraversalMatrix': 'org.apache.tinkerpop.gremlin.process.traversal.util.TraversalMatrix',
        'TraversalMetrics': 'org.apache.tinkerpop.gremlin.process.traversal.util.TraversalMetrics',
        'TraversalRing': 'org.apache.tinkerpop.gremlin.process.traversal.util.TraversalRing',
        'TraversalUtil': 'org.apache.tinkerpop.gremlin.process.traversal.util.TraversalUtil',
        'Compare': 'org.apache.tinkerpop.gremlin.structure.Compare',
        'Contains': 'org.apache.tinkerpop.gremlin.structure.Contains',
        'Direction': 'org.apache.tinkerpop.gremlin.structure.Direction',
        'Edge': 'org.apache.tinkerpop.gremlin.structure.Edge',
        'Edge$Exceptions': 'org.apache.tinkerpop.gremlin.structure.Edge$Exceptions',
        'Element': 'org.apache.tinkerpop.gremlin.structure.Element',
        'Element$Exceptions': 'org.apache.tinkerpop.gremlin.structure.Element$Exceptions',
        'Graph': 'org.apache.tinkerpop.gremlin.structure.Graph',
        'Graph$Exceptions': 'org.apache.tinkerpop.gremlin.structure.Graph$Exceptions',
        'Graph$Features': 'org.apache.tinkerpop.gremlin.structure.Graph$Features',
        'Graph$Features$DataTypeFeatures': 'org.apache.tinkerpop.gremlin.structure.Graph$Features$DataTypeFeatures',
        'Graph$Features$EdgeFeatures': 'org.apache.tinkerpop.gremlin.structure.Graph$Features$EdgeFeatures',
        'Graph$Features$EdgePropertyFeatures': 'org.apache.tinkerpop.gremlin.structure.Graph$Features$EdgePropertyFeatures',
        'Graph$Features$ElementFeatures': 'org.apache.tinkerpop.gremlin.structure.Graph$Features$ElementFeatures',
        'Graph$Features$FeatureSet': 'org.apache.tinkerpop.gremlin.structure.Graph$Features$FeatureSet',
        'Graph$Features$GraphFeatures': 'org.apache.tinkerpop.gremlin.structure.Graph$Features$GraphFeatures',
        'Graph$Features$PropertyFeatures': 'org.apache.tinkerpop.gremlin.structure.Graph$Features$PropertyFeatures',
        'Graph$Features$VariableFeatures': 'org.apache.tinkerpop.gremlin.structure.Graph$Features$VariableFeatures',
        'Graph$Features$VertexFeatures': 'org.apache.tinkerpop.gremlin.structure.Graph$Features$VertexFeatures',
        'Graph$Features$VertexPropertyFeatures': 'org.apache.tinkerpop.gremlin.structure.Graph$Features$VertexPropertyFeatures',
        'Graph$Helper': 'org.apache.tinkerpop.gremlin.structure.Graph$Helper',
        'Graph$Hidden': 'org.apache.tinkerpop.gremlin.structure.Graph$Hidden',
        'Graph$Io': 'org.apache.tinkerpop.gremlin.structure.Graph$Io',
        'Graph$OptIn': 'org.apache.tinkerpop.gremlin.structure.Graph$OptIn',
        'Graph$OptIns': 'org.apache.tinkerpop.gremlin.structure.Graph$OptIns',
        'Graph$OptOut': 'org.apache.tinkerpop.gremlin.structure.Graph$OptOut',
        'Graph$OptOuts': 'org.apache.tinkerpop.gremlin.structure.Graph$OptOuts',
        'Graph$Variables': 'org.apache.tinkerpop.gremlin.structure.Graph$Variables',
        'Graph$Variables$Exceptions': 'org.apache.tinkerpop.gremlin.structure.Graph$Variables$Exceptions',
        'DefaultIo': 'org.apache.tinkerpop.gremlin.structure.io.DefaultIo',
        'GraphMigrator': 'org.apache.tinkerpop.gremlin.structure.io.GraphMigrator',
        'GraphMLReader': 'org.apache.tinkerpop.gremlin.structure.io.graphml.GraphMLReader',
        'GraphMLReader$Builder': 'org.apache.tinkerpop.gremlin.structure.io.graphml.GraphMLReader$Builder',
        'GraphMLWriter': 'org.apache.tinkerpop.gremlin.structure.io.graphml.GraphMLWriter',
        'GraphMLWriter$Builder': 'org.apache.tinkerpop.gremlin.structure.io.graphml.GraphMLWriter$Builder',
        'GraphMLWriterHelper$IndentingXMLStreamWriter': 'org.apache.tinkerpop.gremlin.structure.io.graphml.GraphMLWriterHelper$IndentingXMLStreamWriter',
        'GraphReader': 'org.apache.tinkerpop.gremlin.structure.io.GraphReader',
        'GraphSONMapper': 'org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONMapper',
        'GraphSONMapper$Builder': 'org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONMapper$Builder',
        'GraphSONModule': 'org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONModule',
        'GraphSONReader': 'org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONReader',
        'GraphSONReader$Builder': 'org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONReader$Builder',
        'GraphSONTokens': 'org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONTokens',
        'GraphSONVertexProperty': 'org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONVertexProperty',
        'GraphSONWriter': 'org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONWriter',
        'GraphSONWriter$Builder': 'org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONWriter$Builder',
        'LegacyGraphSONReader': 'org.apache.tinkerpop.gremlin.structure.io.graphson.LegacyGraphSONReader',
        'LegacyGraphSONReader$Builder': 'org.apache.tinkerpop.gremlin.structure.io.graphson.LegacyGraphSONReader$Builder',
        'LegacyGraphSONReader$GraphSONTokens': 'org.apache.tinkerpop.gremlin.structure.io.graphson.LegacyGraphSONReader$GraphSONTokens',
        'LegacyGraphSONReader$GraphSONUtility': 'org.apache.tinkerpop.gremlin.structure.io.graphson.LegacyGraphSONReader$GraphSONUtility',
        'GraphWriter': 'org.apache.tinkerpop.gremlin.structure.io.GraphWriter',
        'GryoMapper': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoMapper',
        'GryoMapper$Builder': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoMapper$Builder',
        'GryoMapper$BuilderV1d0': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoMapper$BuilderV1d0',
        'GryoMapper$HeaderReader': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoMapper$HeaderReader',
        'GryoMapper$HeaderWriter': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoMapper$HeaderWriter',
        'GryoMapper$Version': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoMapper$Version',
        'GryoPool': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoPool',
        'GryoPool$Type': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoPool$Type',
        'GryoReader': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoReader',
        'GryoReader$Builder': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoReader$Builder',
        'GryoWriter': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoWriter',
        'GryoWriter$Builder': 'org.apache.tinkerpop.gremlin.structure.io.gryo.GryoWriter$Builder',
        'VertexByteArrayInputStream': 'org.apache.tinkerpop.gremlin.structure.io.gryo.VertexByteArrayInputStream',
        'Mapper': 'org.apache.tinkerpop.gremlin.structure.io.Mapper',
        'Operator': 'org.apache.tinkerpop.gremlin.structure.Operator',
        'Order': 'org.apache.tinkerpop.gremlin.structure.Order',
        'Property': 'org.apache.tinkerpop.gremlin.structure.Property',
        'Property$Exceptions': 'org.apache.tinkerpop.gremlin.structure.Property$Exceptions',
        'PropertyType': 'org.apache.tinkerpop.gremlin.structure.PropertyType',
        'Transaction': 'org.apache.tinkerpop.gremlin.structure.Transaction',
        'Transaction$CLOSE_BEHAVIOR': 'org.apache.tinkerpop.gremlin.structure.Transaction$CLOSE_BEHAVIOR',
        'Transaction$Exceptions': 'org.apache.tinkerpop.gremlin.structure.Transaction$Exceptions',
        'Transaction$READ_WRITE_BEHAVIOR': 'org.apache.tinkerpop.gremlin.structure.Transaction$READ_WRITE_BEHAVIOR',
        'Transaction$Status': 'org.apache.tinkerpop.gremlin.structure.Transaction$Status',
        'Transaction$Workload': 'org.apache.tinkerpop.gremlin.structure.Transaction$Workload',
        'AbstractTransaction': 'org.apache.tinkerpop.gremlin.structure.util.AbstractTransaction',
        'AbstractTransaction$TransactionException': 'org.apache.tinkerpop.gremlin.structure.util.AbstractTransaction$TransactionException',
        'BatchGraph': 'org.apache.tinkerpop.gremlin.structure.util.batch.BatchGraph',
        'BatchGraph$Builder': 'org.apache.tinkerpop.gremlin.structure.util.batch.BatchGraph$Builder',
        'Exists': 'org.apache.tinkerpop.gremlin.structure.util.batch.Exists',
        'VertexIdType': 'org.apache.tinkerpop.gremlin.structure.util.batch.VertexIdType',
        'Comparators': 'org.apache.tinkerpop.gremlin.structure.util.Comparators',
        'Attachable': 'org.apache.tinkerpop.gremlin.structure.util.detached.Attachable',
        'DetachedEdge': 'org.apache.tinkerpop.gremlin.structure.util.detached.DetachedEdge',
        'DetachedElement': 'org.apache.tinkerpop.gremlin.structure.util.detached.DetachedElement',
        'DetachedFactory': 'org.apache.tinkerpop.gremlin.structure.util.detached.DetachedFactory',
        'DetachedPath': 'org.apache.tinkerpop.gremlin.structure.util.detached.DetachedPath',
        'DetachedProperty': 'org.apache.tinkerpop.gremlin.structure.util.detached.DetachedProperty',
        'DetachedVertex': 'org.apache.tinkerpop.gremlin.structure.util.detached.DetachedVertex',
        'DetachedVertexProperty': 'org.apache.tinkerpop.gremlin.structure.util.detached.DetachedVertexProperty',
        'ElementHelper': 'org.apache.tinkerpop.gremlin.structure.util.ElementHelper',
        'FeatureDescriptor': 'org.apache.tinkerpop.gremlin.structure.util.FeatureDescriptor',
        'GraphFactory': 'org.apache.tinkerpop.gremlin.structure.util.GraphFactory',
        'GraphVariableHelper': 'org.apache.tinkerpop.gremlin.structure.util.GraphVariableHelper',
        'StringFactory': 'org.apache.tinkerpop.gremlin.structure.util.StringFactory',
        'Vertex': 'org.apache.tinkerpop.gremlin.structure.Vertex',
        'Vertex$Exceptions': 'org.apache.tinkerpop.gremlin.structure.Vertex$Exceptions',
        'VertexProperty': 'org.apache.tinkerpop.gremlin.structure.VertexProperty',
        'VertexProperty$Cardinality': 'org.apache.tinkerpop.gremlin.structure.VertexProperty$Cardinality',
        'VertexProperty$Exceptions': 'org.apache.tinkerpop.gremlin.structure.VertexProperty$Exceptions',
        'TinkerComputerResult': 'org.apache.tinkerpop.gremlin.tinkergraph.process.computer.TinkerComputerResult',
        'TinkerGraphComputer': 'org.apache.tinkerpop.gremlin.tinkergraph.process.computer.TinkerGraphComputer',
        'TinkerGraphView': 'org.apache.tinkerpop.gremlin.tinkergraph.process.computer.TinkerGraphView',
        'TinkerMapEmitter': 'org.apache.tinkerpop.gremlin.tinkergraph.process.computer.TinkerMapEmitter',
        'TinkerMemory': 'org.apache.tinkerpop.gremlin.tinkergraph.process.computer.TinkerMemory',
        'TinkerMessenger': 'org.apache.tinkerpop.gremlin.tinkergraph.process.computer.TinkerMessenger',
        'TinkerReduceEmitter': 'org.apache.tinkerpop.gremlin.tinkergraph.process.computer.TinkerReduceEmitter',
        'TinkerWorkerPool': 'org.apache.tinkerpop.gremlin.tinkergraph.process.computer.TinkerWorkerPool',
        'TinkerEdge': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerEdge',
        'TinkerElement': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerElement',
        'TinkerFactory': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerFactory',
        'TinkerFactory$SocialTraversal': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerFactory$SocialTraversal',
        'TinkerFactory$SocialTraversal$DefaultSocialTraversal': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerFactory$SocialTraversal$DefaultSocialTraversal',
        'TinkerGraph': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerGraph',
        'TinkerGraph$TinkerGraphEdgeFeatures': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerGraph$TinkerGraphEdgeFeatures',
        'TinkerGraph$TinkerGraphFeatures': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerGraph$TinkerGraphFeatures',
        'TinkerGraph$TinkerGraphGraphFeatures': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerGraph$TinkerGraphGraphFeatures',
        'TinkerGraph$TinkerGraphVertexFeatures': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerGraph$TinkerGraphVertexFeatures',
        'TinkerGraphVariables': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerGraphVariables',
        'TinkerHelper': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerHelper',
        'TinkerProperty': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerProperty',
        'TinkerVertex': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerVertex',
        'TinkerVertexProperty': 'org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerVertexProperty',
        'ArrayListSupplier': 'org.apache.tinkerpop.gremlin.util.function.ArrayListSupplier',
        'BulkSetSupplier': 'org.apache.tinkerpop.gremlin.util.function.BulkSetSupplier',
        'ChainedComparator': 'org.apache.tinkerpop.gremlin.util.function.ChainedComparator',
        'CloningUnaryOperator': 'org.apache.tinkerpop.gremlin.util.function.CloningUnaryOperator',
        'ConstantSupplier': 'org.apache.tinkerpop.gremlin.util.function.ConstantSupplier',
        'FunctionUtils': 'org.apache.tinkerpop.gremlin.util.function.FunctionUtils',
        'HashMapSupplier': 'org.apache.tinkerpop.gremlin.util.function.HashMapSupplier',
        'HashSetSupplier': 'org.apache.tinkerpop.gremlin.util.function.HashSetSupplier',
        'MeanNumberSupplier': 'org.apache.tinkerpop.gremlin.util.function.MeanNumberSupplier',
        'ThrowingBiConsumer': 'org.apache.tinkerpop.gremlin.util.function.ThrowingBiConsumer',
        'ThrowingConsumer': 'org.apache.tinkerpop.gremlin.util.function.ThrowingConsumer',
        'ThrowingFunction': 'org.apache.tinkerpop.gremlin.util.function.ThrowingFunction',
        'ThrowingSupplier': 'org.apache.tinkerpop.gremlin.util.function.ThrowingSupplier',
        'TraversableLambda': 'org.apache.tinkerpop.gremlin.util.function.TraversableLambda',
        'TreeSupplier': 'org.apache.tinkerpop.gremlin.util.function.TreeSupplier',
        'TriConsumer': 'org.apache.tinkerpop.gremlin.util.function.TriConsumer',
        'TriFunction': 'org.apache.tinkerpop.gremlin.util.function.TriFunction',
        'Gremlin': 'org.apache.tinkerpop.gremlin.util.Gremlin',
        'InterruptedRuntimeException': 'org.apache.tinkerpop.gremlin.util.InterruptedRuntimeException',
        'Serializer': 'org.apache.tinkerpop.gremlin.util.Serializer',
        'StreamFactory': 'org.apache.tinkerpop.gremlin.util.StreamFactory',
        'TimeUtil': 'org.apache.tinkerpop.gremlin.util.TimeUtil',
        'ClassNode': 'org.codehaus.groovy.ast.ClassNode',
        'CompilerConfiguration': 'org.codehaus.groovy.control.CompilerConfiguration',
        'CompilationCustomizer': 'org.codehaus.groovy.control.customizers.CompilationCustomizer',
        'NullObject': 'org.codehaus.groovy.runtime.NullObject',
        'Groovysh': 'org.codehaus.groovy.tools.shell.Groovysh',
        'ManagedReference': 'org.codehaus.groovy.util.ManagedReference',
        'ReferenceBundle': 'org.codehaus.groovy.util.ReferenceBundle'
    };
    if (shortName in shortToLongNameMap) {
        return java.import(shortToLongNameMap[shortName]);
    }
    else {
        throw new Error('autoImport unable to import short name:' + shortName);
    }
}
module.exports = autoImport;
//# sourceMappingURL=autoImport.js.map